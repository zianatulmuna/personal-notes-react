import React from 'react';
import ButtonDelete from './ButtonDelete';
import ButtonArchive from './ButtonArchive';
import ButtonActivate from './ButtonActivate';
import { format } from "date-fns";
import idLocale from "date-fns/locale/id";
 
function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive, onActivate }) {
    const date = new Date(createdAt);
    const dateTime = format(date, "EEEE, dd MMMM yyyy", { locale: idLocale });

    return (
        <div className="col">
            <div className="card border-light-subtle shadow h-100">
                <div className="card-body">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-body-secondary small">{dateTime}</h6>
                    <p className="card-text pt-2">{body}</p>
                </div>
                <div className="py-1 px-2 border-top d-flex justify-content-between">
                    <ButtonDelete id={id} onDelete={onDelete} />
                    {
                        archived ? (
                            <ButtonActivate id={id} onActivate={onActivate} />
                        ) : (
                            <ButtonArchive id={id} onArchive={onArchive} />
                        )
                    }
                </div>
            </div>
        </div>
    );
}
 
export default NoteItem;