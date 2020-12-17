var app = new Vue(
  {
    el: "#root",
    data: {
      albumArray: [],
      newGenre: [],
      selectedGenre: ''

    },
    mounted: function() {
      var myThis = this;
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function (album) {
          myThis.albumArray = album.data.response;

          for (var i = 0; i < myThis.albumArray.length; i++) {
            if (!myThis.newGenre.includes(album.data.response[i].genre)) {
                myThis.newGenre.push(album.data.response[i].genre);
            }
          }
        }
      );
    }
    // computed: {
    //   selectGenre: function() {
    //     if (this.selectedGenre == "") {
    //       return this.albumArray;
    //     } else {
    //       const filteredArray = this.albumArray.filter((element) => {
    //         return element.genre == this.selectedGenre;
    //       });
    //       return filteredArray;
    //     }
    //   }
    // }
  }
)
