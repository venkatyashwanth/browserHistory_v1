import React from 'react';
import styles from "./HistoryElement.module.scss";

function HistoryElement(props) {
    const { historyItems,deleteHistoryItem } = props;
    const deleteElement = () => {
        deleteHistoryItem(historyItems.id)
    }
    return (
        <li className={`${styles.listItem}`}>
            <div className={`${styles.historyContent}`}>
                <p className={`${styles.timeAccessed}`}>{historyItems.timeAccessed}</p>
                <div className={`${styles.historyData}`}>
                    <div className={`${styles.imageWrapper}`}>
                        <img src={historyItems.logoUrl} alt={historyItems.title} />
                    </div>
                    <div>
                        <p className={`${styles.title}`}>{historyItems.title}</p>
                        <p className={`${styles.domainUrl}`}>{historyItems.domainUrl}</p>
                    </div>
                </div>
            </div>
            <button className={`${styles.deleteBtn}`} onClick={deleteElement}>
                <img src="https://assets.ccbp.in/frontend/react-js/delete-img.png" alt="delete" />
            </button>
        </li>
    )
}

export default HistoryElement