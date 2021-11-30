const mongoose = require('mongoose');

const PortfolioViewerSchema = new mongoose.Schema({
    email:{type:String},companyName:{type:String},message:{type:String}
  });
  
  const portfolioViewer = mongoose.model('portfolioviewer',PortfolioViewerSchema);

  module.export = portfolioViewer;
