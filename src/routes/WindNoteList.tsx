import Footer from "../components/Footer";
import WindNote from "../components/WindNote";
import { useNotes } from "../queries/NoteQuery";
import NoteHeader from "../components/NoteHeader";
import HeaderTab from "../components/HeaderTab";
import { useGetUser } from "../queries/AuthQuery";

const WindNoteList = () => {
  const { data: notes, isLoading, isFetching } = useNotes();
  const { data: user } = useGetUser();
  return (
    <div>
      <NoteHeader />
      <HeaderTab />
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
      <Footer />
    </div>
  );
};

export default WindNoteList;
