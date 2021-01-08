<template>
  <div class="pomodoro-box">
    <div class="pomodoro-box__selection">
      <div
        class="pomodoro-box__option"
        v-on:click="
          onOptionSelect(event, pomodoro, 'pomodoroChecked'), onSelectSound()
        "
        v-bind:class="{ 'pomodoro-box__option--selected': checked[0] }"
      >
        Pomodoro
      </div>
      <div
        class="pomodoro-box__option"
        v-on:click="
          onOptionSelect(event, shortBreak, 'shortBreakChecked'),
            onSelectSound()
        "
        v-bind:class="{ 'pomodoro-box__option--selected': checked[1] }"
      >
        Short Break
      </div>
      <div
        class="pomodoro-box__option"
        v-on:click="
          onOptionSelect(event, longBreak, 'longBreakChecked'), onSelectSound()
        "
        v-bind:class="{ 'pomodoro-box__option--selected': checked[2] }"
      >
        Long Break
      </div>
    </div>
    <div class="pomodoro-box__time">
      <span v-if="minutes < 10">0</span>{{ minutes }}:<span v-if="seconds < 10"
        >0</span
      >{{ seconds }}
    </div>
    <button
      :disabled="isDisabled"
      v-on:click="onButtonClick(event, isStop), playSound()"
      class="pomodoro-box__button"
      v-bind:class="{ 'pomodoro-box__button--disabled': isDisabled }"
    >
      <span v-if="isStop">Start</span> <span v-else>Stop</span>
    </button>
  </div>
</template>

<script>
import selectSound from "../../assets/click.mp3";
import elevatorSound from "../../assets/elevator.wav";
export default {
  name: "PomodoroBox",
  data: () => {
    return {
      time: 1500,
      minutes: 0,
      seconds: 0,
      isStop: true,
      isDisabled: false,
      checked: [true, false, false],
    };
  },
  props: {
    pomodoro: {
      type: Number,
    },
    shortBreak: {
      type: Number,
    },
    longBreak: {
      type: Number,
    },
  },
  mounted() {
    this.minutes = Math.floor(this.time / 60);
    this.seconds = this.time - this.minutes * 60;
    this.isStop = true;
  },
  methods: {
    onSelectSound: function() {
      var audio = new Audio(selectSound);
      audio.play();
    },
    playSound: function() {
      var audio = new Audio(elevatorSound);
      audio.play();
    },
    onOptionSelect: function(event, time, selected) {
      this.time = time;
      this.minutes = Math.floor(this.time / 60);
      this.seconds = this.time - this.minutes * 60;
      this.isStop = true;

      const checked = [
        "pomodoroChecked",
        "shortBreakChecked",
        "longBreakChecked",
      ];

      checked.map((item, index) => {
        if (selected === item) {
          this.checked[index] = true;
        } else {
          this.checked[index] = false;
        }
      });
    },
    onButtonClick: function(event, isStop) {
      this.isStop = !isStop;
      this.isDisabled = true;
      var audio = new Audio(elevatorSound);

      const countdown = setInterval(() => {
        if (this.isStop === true) {
          clearInterval(countdown);
        } else {
          if (this.time == 0) {
            console.log("time is up");
            audio.play();
            return;
          }
          this.time--;
        }
        this.minutes = Math.floor(this.time / 60);
        this.seconds = this.time - this.minutes * 60;
        this.isDisabled = false;
      }, 1000);

      if (this.isStop) {
        clearInterval(countdown);
      }
    },
  },
};
</script>
