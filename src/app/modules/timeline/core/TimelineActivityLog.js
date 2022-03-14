import React, {useEffect, useRef, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import ActivityLog from "./ActivityLog";
import {addImageSuffix, authUserInfo, isPageReachBottom} from "../../../services/Util";
import {fetchTimeline} from "../../store/action/Timeline";
import {useParams} from "react-router-dom";

const TimelineActivityLog = ({toggleAddComment, setLoader}) => {
    const timelineStore = useSelector(store => store.timelineStore)
    const dispatch = useDispatch()
    const myStateRef = useRef({});
    const params = useParams();

    const setMyState = (data) => {
        myStateRef.current = data;
    };

    useEffect(() => {
        setMyState(timelineStore);
    }, [timelineStore]);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => {
            document.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const handleScroll = () => {
        if (isPageReachBottom()) {
            let {totalElements, totalPages, currentPage, selectedDesignList} = myStateRef.current;
            if (totalElements > 0 && (totalPages > currentPage)) {
                let paramString;
                if (selectedDesignList?.length > 0) {
                    paramString = `${params.orderId}?page=${currentPage + 1}&size=6&productIds=${selectedDesignList?.join(",")}`
                } else {
                    paramString = `${params.orderId}?page=${currentPage + 1}&size=6`
                }
                setLoader(true);
                dispatch(fetchTimeline(paramString, true)).finally(() => setLoader(false))
            }
        }
    };


    const renderTimeline = () => {
        return timelineStore?.data?.map((item, index) => {
            return <ActivityLog activity={item} key={`timeline_${index}`} setLoader={setLoader}/>
        })
    }

    return (
        <>
            <div className="one-third activity-logs">
                <div className="top-write-comments" onClick={toggleAddComment}>
                    <div className="comments-button cursor-pointer">
                        <p className="regular-12 mb-0">
                            <img
                                src={addImageSuffix(
                                    authUserInfo().profilePicDocument.docUrl,
                                    "_xicon"
                                )}
                                alt="profile"
                                className="profile-image"
                            />
                            Write comment...
                        </p>
                        <img src="/icons/attachment.svg" alt="attach"/>
                    </div>
                </div>
                <div className="activity-list">
                    {renderTimeline()}
                </div>
            </div>
        </>
    )
}

export default TimelineActivityLog