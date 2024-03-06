class File {
  constructor() {
    this.url = null;
    this.file = null;
  }

  read_file(e) {
    this.file = e.target.files[0];
    this.url = URL.createObjectURL(this.file);
  }

  get_file() {
    return this.file;
  }

  get_url() {
    return this.url;
  }
}

export default { File };
