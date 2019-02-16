<template>
	<v-container grid-list-md text-xs-center>
		<v-layout row wrap justify-center align-center>
			<v-flex v-for="(playerCard, i) in scores" :key="`6${i}`" xs12 sm6>
				<v-card dark color="secondary">
					<v-card-title class="headline">Player {{ i }}</v-card-title>
					<v-card-text class="px-0">{{ scores[i]  }}</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
import Nes from "nes/client";

export default {
  validate({ params }) {
    return !isNaN(+params.id);
  },
  data() {
    return {
      scores: []
    };
  },
  async mounted() {
    const client = new Nes.Client("ws://localhost:3000");
    await client.connect();
    const handler = (update, flags) => this.scores = update.scores;
    await client.subscribe(`/api/chatroom/${this.$route.params.id}`, handler);
  }
};
</script>
