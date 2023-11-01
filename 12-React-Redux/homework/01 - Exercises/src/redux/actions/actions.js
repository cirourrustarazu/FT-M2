import axios from 'axios';
import {ADD_PRODUCT, DELETE_PRODUCT,GET_STORE_NAME} from './types'


// Función action creator para agregar un producto
export function addProduct(product) {
    return {
      type: ADD_PRODUCT,
      payload: product,
    };
  }


  // Función action creator para eliminar un producto
export function deleteProduct(id) {
    return {
      type: DELETE_PRODUCT,
      payload: id,
    };
  }

export function getStoreName(){
    return async function (dispatch) {
        let response = await axios.get('http://localhost:3001/store');
        /*Aquí es donde agregas tu código*/
        return dispatch({type:GET_STORE_NAME, payload: response.data.name});
  };
}