module.exports = {
  viewDashboard: function (req, res) {
    res.render('admin/dashboard/view_dashboard')
  },
  
  viewCategory: function (req, res) {
    res.render('admin/category/view_category')
  },

  viewBank: function (req, res) {
    res.render('admin/bank/view_bank')
  }
}