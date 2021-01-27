import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { productAvailabilityStatus, addImageSuffix } from '../services/Util';

import { _storeData } from "../pages/design/actions";
// export class ProductCard = ({ item , showDetails , likeProduct , unlikeProduct }) => {

class ProductCard extends Component {

  constructor(props) {
      super(props);
      this.state = {
        step : 1,
        likeFlag : this.props.item.liked
      };
  }

  componentDidUpdate = (prevProps, prevState) => {
    if(1){
      // console.log('componentDidUpdate ProductCard',prevProps,this.props)
    }
  }

  componentDidMount = async() => {

  }

  startProject = (arr) => {
      this.props._storeData('choosenIdsForQuick',arr)
      this.props._storeData('fromRfq',false)
  }

  render() {
    let flag = 1;
    let { item , showDetails , likeProduct , unlikeProduct } = this.props;
    // console.log("likeFlag",this.state.likeFlag)
    return(
      <div className="card product-card">
          <a href={'/my-products/' + item.id}>
            {
              item.designDocuments.length > 0 ?
              item.designDocuments.map((doc,i) => {
                if(doc.docType=='PRODUCT_DESIGN' && flag){
                  flag = 0;
                  return (
                    <img key={i} src={addImageSuffix(doc.docUrl, '_xthumbnail')} alt="designer" className="card-img-top img-fluid d-block mx-auto"/>
                  )
                }
                if(item.designDocuments.length==i+1 && flag){
                  return(
                    <img key={i} src={addImageSuffix(item.designDocuments[0].docUrl, '_xthumbnail')} alt="designer" className="card-img-top img-fluid d-block mx-auto"/>
                  )
                }
              })
              :
              <img src={require("../assets/images/default_product.svg")} alt="designer" className="card-img-top img-fluid d-block mx-auto"/>
            }
          </a>
          <div className="card-body">
              <h5 className="card-title text-capitalize">{item.name ? item.name : 'N/A'}</h5>
              <span className="design-category">{item.productGroup ? item.productGroup : 'Tech pack'}</span>
              <div className="card-footer">
                  {
                    productAvailabilityStatus(item)
                  }
                  <button className="ask-quote" data-toggle="modal" data-target="#quickQuoteModal" onClick={() => this.props._storeData('choosenIdsForQuick',[item.id])}>Quote now</button>
                  {/*<div className="dropdown">*/}
                  {/*    <button type="button" className="btn btn-action dropdown-toggle" data-toggle="dropdown" data-display="static" aria-haspopup="true" aria-expanded="false" style={{color: '#EE761F'}}>*/}
                  {/*        Action*/}
                  {/*    </button>*/}
                  {/*    <div className="dropdown-menu dropdown-menu-lg-right">*/}
                  {/*        <a className="dropdown-item" data-toggle="modal" data-target="#quickQuoteModal" onClick={() => this.props._storeData('choosenIdsForQuick',[item.id])}>Ask for quote</a>*/}
                  {/*        /!*<a className="dropdown-item" data-toggle="modal" data-target="#quickProjectModal" onClick={() => this.startProject([item.id])}>Start project</a>*!/*/}
                  {/*    </div>*/}
                  {/*</div>*/}
              </div>
          </div>
          <div className="favourite-part">
              {
                item.liked ?
                <img src={require("../assets/icons/heart_full.png")} alt="" onClick={(e) => unlikeProduct(item.id)} className="img-fluid" style={{width: 20}}/>
                :
                <img src={require("../assets/icons/heart_empty.png")} alt="" onClick={(e) => likeProduct(item.id)} className="img-fluid" style={{width: 20}}/>
              }
          </div>
      </div>
    )
  }

}

const mapStateToProps = store => {
  return {
		// project_type: store.project.project_type
	};
};

const mapDispatchToProps = dispatch => {
	return bindActionCreators(
		{
			_storeData
		},
		dispatch
	);
};



export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
