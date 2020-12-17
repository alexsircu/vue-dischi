var app = new Vue(
  {
    el: "#root",
    data: {
      albumArray: null

    },
    mounted: function() {
      var myThis = this;
      axios
        .get('https://flynn.boolean.careers/exercises/api/array/music')
        .then(function (album) {
          myThis.albumArray = album.data.response;
        }
      );
    }
  }
)
