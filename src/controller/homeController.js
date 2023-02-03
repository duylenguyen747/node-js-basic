let getHomepage = (req, res) => {
  // lam` logic tai day
  return res.render("index.ejs");
};

module.exports = {
  getHomepage,
};
