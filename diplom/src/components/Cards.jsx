import React from "react";
import { Link, useLocation } from "react-router-dom";
import Loader from "./Loader";
import Message from "./Message";

const Cards = ({
    items, isCatalog, loading, error,
}) => {
    let location = useLocation();
    let currentLink = location.pathname === '/catalog' ? '/catalog' : '/catalog';
    return (
        <div>
            <div className="row">
                {
                    items.map((item) => (
                        <div className={`col-4 ${isCatalog ? 'catalog-item-card-wrapper' : ''}`} key={item.id} >
                            <div className={`card ${isCatalog ? 'catalog-item-card' : ''}`}>
                                <img
                                    src={item.images[0]}
                                    className="card-img-top img-fluid"
                                    alt={item.title}
                                />

                                <div className="card-body">
                                    <p className="card-text">{item.title}</p>
                                    <p className="card-text">{item.price} руб.</p>
                                    <Link
                                      to={`${currentLink}/${item.id}`}
                                      className="btn btn-outline-primary"
                                    >Заказать
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Message type="error" message={error} />
            <Loader loading={loading} />
        </div>
    )
};

export default Cards;
