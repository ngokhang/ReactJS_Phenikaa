import Note from "./Note";

export default class NoteList {
  private noteList: Note[];

  constructor() {
    this.noteList = [];
  }

  addNoteToList(note: Note):void {
    this.noteList.push(note);
  }

  getNoteList(): Note[] {
    return this.noteList;
  }
}