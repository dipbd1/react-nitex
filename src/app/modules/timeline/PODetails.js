import React, {useEffect, useState} from "react";
import {useHistory, useParams} from "react-router-dom";
import Http from "../../services/Http";
import LoaderComponent from "../../commonComponents/Loader";
import {toastError} from "../../commonComponents/Toast";
import {renderMultiColor} from "../../services/Util";

const PODetails = () => {
    const [orderList, setOrderList] = useState();
    const [loader, setLoader] = useState(true);
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        Http.GET('getOrderQuotes', `${params.orderId}`).then((response) => {
            setOrderList(response.data)
            setLoader(false)
        }).catch((error) => {
            toastError(error.response.data.message);
            setLoader(false)
        })
    }, [])

    const getColorWisePrice = (colorWisePrices, id) => {
        if (colorWisePrices[id]) {
            return colorWisePrices[id];
        }
        return null;
    };

    const getSizeWisePrice = (sizeWisePrices, id) => {
        if (sizeWisePrices[id]) {
            return sizeWisePrices[id];
        }
        return null;
    };


    const renderColorWiseList = (order) => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th></th>
                    {order.colorWiseSizeQuantityPairList &&
                        order.colorWiseSizeQuantityPairList.length > 0 &&
                        order.colorWiseSizeQuantityPairList[0].sizeQuantityPairList.map(
                            (value) => (
                                <th key={value.code}>
                                    <p className="semibold-14">{value.code}</p>
                                </th>
                            )
                        )}
                    <th>QTY</th>
                    {order.buyerQuotationType === "COLORWISE" && <th>Price</th>}
                </tr>
                </thead>
                <tbody>
                {order?.colorWiseSizeQuantityPairList &&
                    order.colorWiseSizeQuantityPairList.map((value, index) => {
                        let qty = 0;
                        return (
                            <tr>
                                <td>
                                    <span key={value.id}>
                                        {renderMultiColor(value)}
                                    </span>
                                </td>
                                {value &&
                                    value.sizeQuantityPairList.map((style, inputIndex) => {
                                        qty += style.quantity
                                        return (
                                            <td key={`style_${inputIndex}`}>
                                                <p>{style.quantity}</p>
                                            </td>
                                        )
                                    })
                                }
                                <td>{qty}</td>
                                {order.buyerQuotationType === "COLORWISE" &&
                                    <td><p>{getColorWisePrice(order.colorWiseBuyerPrice, value.id)}</p></td>}
                            </tr>
                        )
                    })}
                {order.buyerQuotationType === 'SIZEWISE' && (
                    <tr>
                        <td></td>
                        {order.colorWiseSizeQuantityPairList &&
                            order.colorWiseSizeQuantityPairList[0].sizeQuantityPairList.map(
                                (style) => (
                                    <td key={style.size}>
                                        <p>{getSizeWisePrice(
                                            order.sizeWiseBuyerPrice,
                                            style.size
                                        )}</p>
                                    </td>
                                )
                            )}
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    const uniqueStyleName = (order) => {
        switch (order.buyerQuotationType) {
            case "DESIGNWISE":
                return "design-wise"
            case "COLORWISE":
                return "color-wise"
            default:
                return "size-wise"
        }
    }

    const renderOrderList = () => {
        return orderList?.map((order, index) => {
            return (
                <div className={`single-design d-flex bg-white ${uniqueStyleName(order)}`} key={`po_order_${index}`}>
                    <div className="design-image">
                        <img src={order?.documentResponseList[0]?.docUrl} alt=""/>
                    </div>
                    <div className="design-details-info">
                        <div className="design-title mt-3 d-flex justify-content-between">
                            <h3 className="semibold-16 mb-3">{order.name}<span
                                className="regular-12 gray_dark_02">({order.productReferenceNumber})</span></h3>
                        </div>
                        <div className="po-details-view">
                            <div className="po-info-colums-view">
                                <ul>
                                    <li>PO: {order.poNumber}</li>
                                    <li>ETD: {order.deliveryDate}</li>
                                </ul>
                            </div>
                            <div className="po-quantity-colums-view">
                                <ul>
                                    <li><span>{order?.colorWiseSizeQuantityPairList?.length}</span> colors</li>
                                    <li><span>{
                                        order?.colorWiseSizeQuantityPairList[0]
                                            ?.sizeQuantityPairList?.length
                                    }</span> size
                                    </li>
                                </ul>
                                <div className="values d-flex mt-1">
                                    <div className="total-value">
                                        <span className="regular-14 gray_dark_02">Total Qty:</span>
                                        <span className="semibold-14"> {order.quantity}</span>
                                    </div>
                                    <div className="total-value ml-2">
                                        <span className="regular-14 gray_dark_02">Price:</span>
                                        <span className="semibold-14">$ {order.amount}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="design-quantity-table mt-2      ">
                        <div className="text-right">
                            <p className="regular-14">{order.buyerQuotationType} {order.priceType}</p>
                        </div>
                        <div className="design-table">
                            <div className="category-wise-table size-wise-table">
                                {renderColorWiseList(order)}
                                {order.buyerQuotationType === "DESIGNWISE" &&
                                    <div className="total-units text-right">
                                    <span className="regular-14 gray_dark_02">
                                        Unit price: <span
                                        className="semibold-14 unit-price-total">${order.designWiseBuyerPrice}</span></span>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }


    return (
        <LoaderComponent loading={loader}>
            <div className="create-order-container">
                <div className="designs-info-section">
                    <h3 className="semibold-16 mb-2"><img src="/icons/Left arrwo.svg" alt="back" onClick={history.goBack}/> PO details</h3>
                    <div className="designs-row">
                        {renderOrderList()}
                    </div>
                </div>
            </div>
        </LoaderComponent>
    )
}

export default PODetails