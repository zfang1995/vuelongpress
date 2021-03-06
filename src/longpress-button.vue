<script>
let timer = null;
let clickDelay = 0.5; // unit: second

export default {
  name: "longpress-button",

  props: ["value", "onConfirm", "duration", "pressingText", "actionText"],

  created() {
    document.addEventListener("mouseup", () => this.cancel());
  },

  destroyed() {
    document.removeEventListener("mouseup", () => this.cancel());
  },

  data() {
    return {
      status: "default",
      counter: clickDelay,
      clickDelay,
      onClick: false,
      shortPressCheckerTimer: null,
      shortPressCounter: 0,
      beforeDestroy: false
    };
  },

  methods: {
    shortPressChecker () {
      if (!this.onClick && this.shortPressCounter) {
        this.status = "counting";
        this.shortPressCounter = 0
        this.countAndConfirm();
      }
      else if (this.shortPressCounter < 1) {
        this.shortPressCheckerTimer = window.setTimeout(this.shortPressChecker, 200);
        this.shortPressCounter++
      }
      else {
        this.shortPressCounter = 0
      }
    },
    triggerCount() {
      if (this.status === "executing" || this.status === "counting") return;
      
      if (this.shortPressCheckerTimer) window.clearTimeout(this.shortPressCheckerTimer)
      this.shortPressCheckerTimer = window.setTimeout(this.shortPressChecker, 200);
    },

    countAndConfirm() {
      if (this.status === "counting") {
        timer = window.setTimeout(() => {
          this.counter = this.counter + this.clickDelay;

          if (this.counter >= this.duration) {
            this.status = "executing";

            window.clearTimeout(timer);

            window.setTimeout(async _ => {
              if (this.onConfirm) await this.onConfirm(this.value || null);
              if (this.beforeDestroy) return ; // The role of this line of code is to reduce useless operations

              this.reset();
            }, this.clickDelay * 1000);

            return;
          }

          this.countAndConfirm();
        }, this.clickDelay * 1000);
      }
    },

    reset() {
      this.status = "default";
      this.cancel();
    },

    cancel() {
      if (this.status === "executing") {
        return;
      } else if (this.status === "default") {
        if (this.onClick) window.clearTimeout(this.onClick)
        this.onClick = window.setTimeout(_ => {
            if (this.onClick)  {
              window.clearTimeout(this.onClick)
              this.onClick = false
            }
        }, this.clickDelay * 1000)
      }

      this.counter = 0;

      if (timer) window.clearTimeout(timer);

      this.status = "default";

    }
  },
  computed: {
    countingPressingText() {
      let pressingText = this.pressingText || "";
      return pressingText
        .replace(/\{\$counter\}/gi, this.counter)
        .replace(/\{\$rcounter\}/gi, this.duration - this.counter)
        .replace(/\{\$duration\}/gi, this.duration);
    }
  },
  beforeDestroy () {
    this.beforeDestroy = true
  },
  destroyed () {
    this.$emit('destroyed')
  }
};
</script>

<template>
  <div
    class="longpress-button"
    :class="status"
    @touchend="cancel()"
    @touchstart.prevent="triggerCount()"
    @mouseup="cancel()"
    @mousedown.prevent="triggerCount()"
  >
    <div>
      <slot v-if="status === 'default'"></slot>
      <span v-if="status === 'counting'">{{ countingPressingText || 'Keep pressing' }}</span>
      <span v-if="status === 'executing' && actionText !== null">{{ actionText || 'Please wait...' }}</span>
    </div>
    <span class="progress-bar" :style="`animation-duration: ${duration - clickDelay}s;`"></span>
  </div>
</template>

<style lang="sass">
.longpress-button {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;

    .progress-bar {
        position: absolute;
        left: 0;
        width: 0;
        bottom: 0;
        height: 4px;
        background: #FFF;
        opacity: 0.4;
    }

    &.counting {
        .progress-bar {
            animation-name: longpress-progress;
            animation-timing-function: linear;
        }
    }

    &.executing {
        opacity: 0.5;
        cursor: denied;
    }
}

@keyframes longpress-progress {
    100% {
        width: 100%;
    }
}
</style>
