// models
const Book = require("../models/book.model");
const Author = require("../models/author.model");
const Genre = require("../models/genre.model");
const BookInstance = require("../models/bookinstance.model");

// npm modules
const async = require("async");

// Site Home Page
exports.index = (req, res, next) => {
  async.parallel(
    {
      book_count(callback) {
        Book.countDocuments({}, callback);
      },
      book_instance_count(callback) {
        BookInstance.countDocuments({}, callback);
      },
      book_instance_available_count(callback) {
        BookInstance.countDocuments({ status: "Available" }, callback);
      },
      author_count(callback) {
        Author.countDocuments({}, callback);
      },
      genre_count(callback) {
        Genre.countDocuments({}, callback);
      },
    },
    (err, results) => {
      res.render("index", {
        title: "Local Library Home",
        error: err,
        data: results,
      });
    }
  );
};

exports.book_list = (req, res, next) => {
  Book.find({}, "title author")
    .sort({title:1})
    .populate("author")

    .exec(function (err, list_books) {
      if (err) {
        return next(err);
      }
      //Successful, so render
      res.render("book_list", { title: "Book List", book_list: list_books });
    });


    // .exec(function (err, list_books) {
    //   if(err) { return next(err); }
    //   res.render("book_list", {title: "Book List", book_list: list_books});
    // });

    // .exec((err, list_books) => err 
    //   ? next(err) 
    //   : res.render("book_list", {title: "Book List", book_list: list_books}))
};

exports.book_detail = (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

exports.book_create_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create GET");
};

exports.book_create_post = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book create POST");
};

exports.book_delete_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

exports.book_delete_post = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

exports.book_update_get = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update GET");
};

exports.book_update_post = (req, res, next) => {
  res.send("NOT IMPLEMENTED: Book update POST");
};
