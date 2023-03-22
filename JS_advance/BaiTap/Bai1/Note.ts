class Note {
  private title: string;
  private content: string;
  
  public constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

  public static addNote(title: string, content: string): Note {
    return new Note(title, content);
  }

  public toString(): string {
    return `
      Title : ${this.title}.
      Content : ${this.content}
    `;
  }
};

export default Note;