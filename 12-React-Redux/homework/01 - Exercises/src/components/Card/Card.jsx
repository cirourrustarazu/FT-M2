import React from 'react';
import { connect } from 'react-redux';
import './card.css';
import {deleteProduct} from '../../redux/actions/actions'

export class Card extends React.Component{
   constructor(props){
      super(props)
   }

    // Crea la función handleDelete
    handleDelete = () => {
      const { deleteProduct, id } = this.props;
      deleteProduct(id);
   }

   render(){
      const {price,name} = this.props
      return (
         <div className='cardBg'>
            <h5>{name}: </h5>
            <h5>${price}</h5>
            <button className='cardBtn' onClick={()=>this.handleDelete()}>X</button>
         </div>
      )
   };
};

export function mapDispatchToProps(dispatch) {
   return {
      deleteProduct:((id)=>{dispatch(deleteProduct(id))})
   }
}

export default connect(null, mapDispatchToProps)(Card);
