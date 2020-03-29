<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2" v-for="(content, index) in contents" :key="index">            
                <v-sheet class="justify-center"
                    :width="width"
                    :height="height"
                     :elevation="elevation"
                     :color="color"
                    :tile="tile"        
                >
                    <div class="test" align="center">{{content}}</div>
                </v-sheet>
            </v-col>            
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'test-page',
    props: {
      source: String,
  },
  data: () => ({
      //width: 100,
      //height: 50,
      elevation: 4,      
      color: 'gray darken-2',
      tile: false,
      contents:['SOME THING', 'ANOTHER THING', 'GOOD', 'FAIL', 'EXCELLLENT','BROKEN']
    }),
}
</script>
<style>
    .test{
        padding: 0.5rem 0;
    }
</style>

