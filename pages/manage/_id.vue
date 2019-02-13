<template>
	<div class="user">
		<Dartboard @click="DartboardClick"/>
	</div>
</template>

<script>
import Dartboard from "../../assets/svg/dartboard.svg";
export default {
  components: {
    Dartboard
  },
  data() {
    return {
      MaxPlayers: 2,
      CurentPlayer: 0,
      Round: 0,
      MaxRounds: 20,
      PlayerTurn: 0,
      MaxPlayerTurns: 3,
      Scores: []
    };
  },
  methods: {
    async DartboardClick(e) {
      if (e.target.tagName === "path" || "circle") {
        /** @type {string} */
        const id = e.target.id;
        let number = 0;
        let char = "";
        if (id === "Bull") {
          number = 50;
        } else if (id === "Outer") {
          number = 25;
        } else {
          const ID_NUMBER = id.substring(1);
          const char = id.charAt(0);
          const MULTIPLIER =
            char === "s" ? 1 : char === "d" ? 2 : char === "t" ? 3 : 1;

          number = MULTIPLIER * ID_NUMBER;
        }

        await this.Increase(number);
        
        await this.$axios.post(`/api/dartgame/501/${this.$route.params.id}`, {
          scores: this.Scores
        });
      }
    },
    Increase(number) {
      if (this.Round < this.MaxRounds && this.Scores.every(num => num > 0)) {
        if (this.PlayerTurn === this.MaxPlayerTurns) {
          this.CurentPlayer += 1;
          this.PlayerTurn = 0;
          this.Round += 1;
        }
        if (this.CurentPlayer === this.MaxPlayers) {
          this.CurentPlayer = 0;
        }
        typeof this.Scores[this.CurentPlayer] === "number"
          ? (this.Scores[this.CurentPlayer] -= number)
          : (this.Scores[this.CurentPlayer] = Number(501 - number));

        this.PlayerTurn += 1;
      }
    }
  }
};
</script>

<style scoped>
.user {
  text-align: center;
  margin-top: 100px;
  font-family: sans-serif;
}
</style>
