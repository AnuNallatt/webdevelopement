function product(props){
    return(
        <>
         <div class="product-item">
                <img src={props.productImage}/>
                <p class="product-title">{props.productTitle}</p>
                <p class="product-price">${props.productPrice}</p>
                <p>{props.productDescription}</p>

            </div>
        </>
    )
}
export default product