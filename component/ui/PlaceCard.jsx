import { Fragment } from "react";

const PlaceCard = ({name, description, address, phone, distance, hours, emoji, className, isClose}) => {
    return (
        <Fragment>
            <div className={`card ${className}`}>
                <div className="place-card">
                    {
                        isClose ?
                            <div className="summer-ribbon">
                                Seulement en été
                            </div>
                        : <Fragment></Fragment>
                    }

                    <div className="cardContent">
                        <div className="place-header">
                            <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                                <span>{emoji}</span>
                                <h3 className="place-title">{name}</h3>
                            </div>

                            <div>

                            {distance && (
                                <span className="badge badge-green">{distance}</span>
                            )}
                            </div>
                        </div>

                        <p className="place-desc">{description}</p>

                        {hours && <div className="place-desc">🕐 {hours}</div>}
                        {address && <div className="place-desc">📍 {address}</div>}

                        {phone && (
                        <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="place-desc"
                            style={{ color: "var(--green)" }}
                        >
                            📞 {phone}
                        </a>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default PlaceCard