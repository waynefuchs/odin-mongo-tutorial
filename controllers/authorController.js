const { nextTick } = require("async");
const Author = require("../models/author.model");

exports.author_list = (req, res) => {
  Author.find()
    .sort([["family_name", "ascending"]])
    .exec(function(err, list_authors) {
      if(err) return next(err);
      res.render("author_list", {
        title: "Author List",
        author_list: list_authors,
      });
    });
};

exports.author_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: Author Detail: ${req.params.id}`);
};

exports.author_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Create GET");
};

exports.author_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Delete POST");
};

exports.author_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Delete GET");
};

exports.author_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author delete POST");
};

exports.author_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Update GET");
};

exports.author_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: Author Update POST");
};
