<template>
  <div class="home">
    <Tabs v-model="active">
      <Tab title="正在热映">
        <div id="listMovieBox">
          <div class="item" v-for="(item, index) in movieListData"  :key = 'index'>
            <a >
              <div class="movie-cover">
                <img :src="item.images.small"  width="88" height="110">
              </div>
              <div class="movie-des">
                <p class="title">{{item.title}}</p>
                <p class="genres"><span>类别:</span><span v-if="item.genres.length === 0">未知</span><span v-else-if="item.genres">{{item.genres}}</span></p>
                <p class="cast">
                  主演:<span v-for="items in item.casts" style="margin-right: 4px;">{{ items.name}}</span>
                </p>
                <p class="director">导演:<span v-if="item.casts[1]">{{ item.casts[1].name }}</span></p>
                <p class="ratings">{{item.rating.average}} <span>分</span></p>
              </div>
            </a>
          </div>
        </div>
      </Tab>
      <Tab title="即将上映">

      </Tab>
      <Tab title="Top250">

      </Tab>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Action, Mutation, State } from 'vuex-class';
import { Tabs, Tab } from 'vant';

@Component({
  components: { Tabs, Tab },
})
export default class Home extends Vue {
  private cate: string = 'in_theaters';
  private active: number = 0;
  private movieListData = [];
  @Action('movieList') movieList!: (cate: string) => any;

  private mounted() {
    console.log('mounted');
    this.fetchMovie(this.cate);
  }
  fetchMovie(cate: string) {
    this.movieList(cate)
      .then((res: any) => {
        console.log(res);
        this.movieListData = res.subjects;
      });
  }
}
</script>
