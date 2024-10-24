import React from "react";
import HeaderTab from "./HeaderTab";
import { useGetUser } from "../queries/UserQuery";
import { useNotes } from "../queries/NoteQuery";
import WindNote from "./WindNote";
const MyPageNoteList = () => {
  const { data: user } = useGetUser();
  const { data: notes, isLoading, isFetching } = useNotes(user?.id);
  return (
    <div className="mb-5">
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            {notes?.map((note) => (
              <WindNote
                key={note.id}
                note={note}
                user={user}
                isFetching={isFetching}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MyPageNoteList;
