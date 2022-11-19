const Genre =     require("../models/genre.model");
const Book =      require("../models/book.model");
const async =     require("async");

exports.genre_list = (req, res) => {
  Genre.find()
    .sort({name:1})
    .exec(function(err, list_genres) {
      if(err) return next(err);
      res.render("genre_list", {
        title: "Genre List",
        genre_list: list_genres,
      });
    });
};

exports.genre_detail = (req, res) => {
  async.parallel(
    {
      genre(callback) {
        Genre.findById(req.params.id).exec(callback);
      },

      genre_books(callback) {
        Book.find({genre: req.params.id}).exec(callback);
      },
    }, (err, results) => {
      if(err) return next(err);
      if(results.genre == null) {
        const err = new Error("Genre not found");
        err.status = 404;
        return next(err);
      }
      res.render("genre_detail", {
        title: "Genre Detail",
        genre: results.genre,
        genre_books: results.genre_books,
      });
    }
  );
};

exports.genre_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create GET");
};

exports.genre_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre create POST");
};

exports.genre_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete GET");
};

exports.genre_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre delete POST");
};

exports.genre_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre Update GET");
};

exports.genre_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Genre Update POST");
};
