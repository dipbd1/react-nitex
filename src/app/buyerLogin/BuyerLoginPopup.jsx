import React from "react";

const BuyerLoginPopup = ({}) => {
    return(
        <>
            <aside className="left-panel" id="side-menu">
                <div className="logo"><a href="#" className="logo-expanded">
                    <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAAA3CAYAAACxUDzgAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIxLjAgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjJCQTVCMkZBMTQyNzExRUI4NENGQkU0OTNENUMxREUzIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjJCQTVCMkZCMTQyNzExRUI4NENGQkU0OTNENUMxREUzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MkJBNUIyRjgxNDI3MTFFQjg0Q0ZCRTQ5M0Q1QzFERTMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MkJBNUIyRjkxNDI3MTFFQjg0Q0ZCRTQ5M0Q1QzFERTMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4252QDAAAF0UlEQVR42uTafWxT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"
                    alt="logo" className="img-fluid d-block mx-auto img_logo_expand"/></a></div>
                <nav className="navigation">
                    <ul className="list-unstyled list_sidebar">
                        <li className="active"><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/Dashboard-active.840c2977.svg" alt="" />
                            </div>
                            <span className="nav-label">Dashboard</span></a></li>
                        <li className=""><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/collections-default.2dd0530d.svg"
                                                              alt="" /></div>
                            <span className="nav-label">Collections</span></a></li>
                        <li className=""><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/quotes-default.e8152120.svg" alt="" />
                            </div>
                            <span className="nav-label">Quotes</span></a></li>
                        <li className=""><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/orders-default.17c00b2b.svg" alt="" />
                            </div>
                            <span className="nav-label">Orders</span></a></li>
                        <li className=""><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/payments-deafult.cb4d4ca9.svg" alt="" />
                            </div>
                            <span className="nav-label">Payments</span></a></li>
                        <li className=""><a href="#">
                            <div className="sidbar-icon"><img src="/static/media/explore-design-default.6b40eb77.svg"
                                                              alt="" /></div>
                            <span className="nav-label">Explore Designs</span></a></li>
                    </ul>
                </nav>
            </aside>
            <div className="content">
                <nav className="navbar navbar-expand navbar-light bg-white topbar static-top">
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                        <svg className="svg-inline--fa fa-bars fa-w-14" aria-hidden="true" data-prefix="fa"
                             data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             data-fa-i2svg="">
                            <path fill="currentColor"
                                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
                        </svg>
                        </button>
                    <ul className="navbar-nav ml-auto align-items-center">
                        <li className="">
                            <button className="btn my-task-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                     fill="none">
                                    <path d="M5 5H15.8333" stroke="#21242B" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M5 10H15.8333" stroke="#21242B" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M5 15H15.8333" stroke="#21242B" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M2.5 5H2.50833" stroke="white" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                    <path d="M2.5 15H2.50833" stroke="white" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"></path>
                                </svg>
                                <span>My tasks</span></button>
                        </li>
                        <li className="nav-item quote-cart dropdown no-arrow" data-toggle="tooltip" data-placement="top"
                            title="" data-original-title="Request quote">
                            <button className="btn btn-outline-default nav-link" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <path
                                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                                        stroke="#21242B" stroke-width="1.5" stroke-linecap="round"
                                        stroke-linejoin="round"></path>
                                    <path d="M20.9999 20.9999L16.6499 16.6499" stroke="#21242B" stroke-width="1.5"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path
                                        d="M13.1776 8.81279C13.0367 8.58373 12.832 8.39488 12.5854 8.26648C12.3388 8.13807 12.0596 8.07494 11.7776 8.08383H10.2221C9.8095 8.08383 9.41384 8.23744 9.12212 8.51085C8.83039 8.78426 8.6665 9.15509 8.6665 9.54175C8.6665 9.92842 8.83039 10.2992 9.12212 10.5727C9.41384 10.8461 9.8095 10.9997 10.2221 10.9997H11.7776C12.1902 10.9997 12.5858 11.1533 12.8776 11.4267C13.1693 11.7001 13.3332 12.0709 13.3332 12.4576C13.3332 12.8443 13.1693 13.2151 12.8776 13.4885C12.5858 13.7619 12.1902 13.9155 11.7776 13.9155H10.2221C9.94011 13.9244 9.66088 13.8613 9.41427 13.7329C9.16766 13.6045 8.96296 13.4156 8.82206 13.1866"
                                        stroke="#21242B" stroke-linecap="round" stroke-linejoin="round"></path>
                                    <path d="M11 14.1113V15.6668M11 6.3335V7.88905V6.3335Z" stroke="#21242B"
                                          stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                                <span>RFQ</span></button>
                        </li>
                        <li className="nav-item notification-bell dropdown no-arrow mx-3" data-toggle="tooltip"
                            data-placement="top" title="" data-original-title="Notification">
                            <button className="btn btn-outline-default nav-link" type="button"
                                    id="dropdownNotification">
                                <svg xmlns="http://www.w3.org/2000/svg" width="14.187" height="18.302"
                                     viewBox="0 0 14.187 18.302">
                                    <path id="bell"
                                          d="M14.829,19a3,3,0,0,1-5.658,0H7.578a2.5,2.5,0,0,1-2.285-3.515L6,13.894V11a6,6,0,0,1,4-5.659V5a2,2,0,1,1,4,0v.341A6,6,0,0,1,18,11v2.894l.707,1.591A2.5,2.5,0,0,1,16.423,19Zm-1.1,0H10.267a2,2,0,0,0,3.466,0ZM13,5.083V5a1,1,0,0,0-2,0v.083A6.068,6.068,0,0,1,13,5.083ZM12,6a5,5,0,0,0-5,5v3l-.043.2-.75,1.688A1.5,1.5,0,0,0,7.578,18h8.845a1.5,1.5,0,0,0,1.371-2.109l-.75-1.688L17,14V11A5,5,0,0,0,12,6Z"
                                          transform="translate(-4.907 -2.85)" fill="#21242b" stroke="#21242b"
                                          stroke-width="0.3"></path>
                                </svg>
                                <span className="unread-notification"></span></button>
                        </li>
                        <li className="nav-item dropdown no-arrow">
                            <button className="btn btn-outline-default nav-link dropdown-toggle" type="button"
                                    id="dropdownProfileButton" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false"><img className="img-profile rounded-circle"
                                                               src="/static/media/pro_pic_default.27c2c214.svg"
                                                               alt="profile-pic" /><span
                                className="mr-2 d-none d-lg-inline">Sample buyer 1</span></button>
                            <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                 aria-labelledby="dropdownProfileButton"><a className="dropdown-item" href="#">
                                <svg className="svg-inline--fa fa-tachometer-alt fa-w-18 mr-2 text-gray-400 font-12"
                                     aria-hidden="true" data-prefix="fas" data-icon="tachometer-alt" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M75.694 480a48.02 48.02 0 0 1-42.448-25.571C12.023 414.3 0 368.556 0 320 0 160.942 128.942 32 288 32s288 128.942 288 288c0 48.556-12.023 94.3-33.246 134.429A48.018 48.018 0 0 1 500.306 480H75.694zM512 288c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zM288 128c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32s-32 14.327-32 32c0 17.673 14.327 32 32 32zM64 288c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm65.608-158.392c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm316.784 0c-17.673 0-32 14.327-32 32 0 17.673 14.327 32 32 32s32-14.327 32-32c0-17.673-14.327-32-32-32zm-87.078 31.534c-12.627-4.04-26.133 2.92-30.173 15.544l-45.923 143.511C250.108 322.645 224 350.264 224 384c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-19.773-8.971-37.447-23.061-49.187l45.919-143.498c4.039-12.625-2.92-26.133-15.544-30.173z"></path>
                                </svg>
                                My task</a><a
                                className="dropdown-item" href="#">
                                <svg className="svg-inline--fa fa-user fa-w-14 fa-sm fa-fw mr-2 text-gray-400"
                                     aria-hidden="true" data-prefix="fas" data-icon="user" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                                    <path fill="currentColor"
                                          d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                                </svg>
                               My profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item">
                                    <svg
                                        className="svg-inline--fa fa-sign-out-alt fa-w-16 fa-sm fa-fw mr-2 text-gray-400"
                                        aria-hidden="true" data-prefix="fas" data-icon="sign-out-alt" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="">
                                        <path fill="currentColor"
                                              d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"></path>
                                    </svg>
                                    Logout</a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <div className="wraper container-fluid dashboard-container">
                    <div data-testid="wrapper" className="_loading_overlay_wrapper css-79elbk">
                        <div className="buyer-dashboard-container">
                            <div className="welcome-message"><h3>Hi <span>Sample buyer 1</span>, Good Afternoon!</h3>
                            </div>
                            <div className="full-journey-status">
                                <div className="one-sixth sustainable-box">
                                    <div className="status-details"><h3>0%</h3><span>Sustainable</span></div>
                                    <div className="status-icon"><img src="/icons/sustainable.svg" alt="sustainable" />
                                    </div>
                                </div>
                                <div className="one-sixth quote-order-box">
                                    <div className="status-details"><h3>0%</h3><span>Quote to order</span></div>
                                    <div className="status-icon"><img src="/icons/quote-order.svg" alt="quote" /></div>
                                </div>
                                <div className="one-sixth design-box">
                                    <div className="status-details"><h3>0<span>/0</span></h3>
                                        <span>Designs accepted</span></div>
                                    <div className="status-icon"><img src="/icons/Design.svg" alt="Design" /></div>
                                </div>
                                <div className="one-sixth delivered-box">
                                    <div className="status-details"><h3>0<span>/0</span></h3>
                                        <span>Orders deliverd</span></div>
                                    <div className="status-icon"><img src="/icons/shipment.svg" alt="shipment" /></div>
                                </div>
                                <div className="one-sixth order-value-box">
                                    <div className="status-details"><h3>$</h3><span>Order value</span></div>
                                    <div className="status-icon"><img src="/icons/order-value.svg" alt="order-value" />
                                    </div>
                                </div>
                                <div className="one-sixth supplier-box">
                                    <div className="status-details"><h3>0</h3><span>Manufacturing units</span></div>
                                    <div className="status-icon"><img src="/icons/Supplier.svg" alt="Supplier" /></div>
                                </div>
                            </div>
                            <div className="orders-and-quotes-status">
                                <div className="one-half my-orders">
                                    <div className="state-title d-flex align-items-center"><h3>My orders <span
                                        className="count">(0)</span></h3><a href="#"> View all</a></div>
                                    <div className="running-orders-info-section progress-info-team-brand">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-12 px-0">
                                                    <div className="team-performance-top">
                                                        <div className="status-filter">
                                                            <div className="performence-status">
                                                                <ul className="order-status d-flex">
                                                                    <li className="mini-fonts"><span
                                                                        className="progress-identifier green"></span>Completed
                                                                        on time
                                                                    </li>
                                                                    <li className="mini-fonts"><span
                                                                        className="progress-identifier blue"></span>Pending
                                                                    </li>
                                                                    <li className="mini-fonts"><span
                                                                        className="progress-identifier red"></span>Overdue
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-section">
                                                        <div className="nothing-found text-center"><img
                                                            src="/icons/Nothing found.svg" alt="nothing found"/><p>No
                                                            order created yet</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="one-half my-quotes">
                                    <div className="state-title d-flex align-items-center"><h3>My quotes</h3><a
                                        href="#">View all</a></div>
                                    <div className="orders-table">
                                        <table className="table table-responsive-sm">
                                            <thead>
                                            <tr>
                                                <th>Design</th>
                                                <th>Quanity</th>
                                                <th>Status</th>
                                                <th>Price/ Unit</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td colSpan="4">
                                                    <div className="nothing-found text-center"><img
                                                        src="/icons/Nothing found.svg" alt="nothing found" /><p>No qoutes
                                                        added yet</p></div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="quick-actions">
                                <div className="state-title d-flex align-items-center"><h3>Quick actions</h3><a
                                    href="#">View all</a></div>
                                <div className="quick-actions-table">
                                    <table className="table table-responsive-sm">
                                        <thead>
                                        <tr>
                                            <th>Task</th>
                                            <th><span>Style <img src="/icons/down-arrow.svg" alt="arrow"/></span></th>
                                            <th><span>Order title <img src="/icons/down-arrow.svg" alt="arrow"/></span>
                                            </th>
                                            <th><span>Order number <img src="/icons/down-arrow.svg" alt="arrow"/></span>
                                            </th>
                                            <th><span>Status </span></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td colSpan="5">
                                                <div className="nothing-found text-center"><img
                                                    src="/icons/Nothing found.svg" alt="nothing found"/><p>You have
                                                    completed all tasks. Great job!</p></div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default BuyerLoginPopup;