export class Content {
  private content: string;

  constructor(content: string) {
    const isContentLengthValid = this.validateContenteLength(content);
    if (!isContentLengthValid) {
      throw new Error('content length error');
    }

    this.content = content;
  }

  get value(): string {
    return this.content;
  }

  validateContenteLength(content: string): boolean {
    if (content.length < 5 || content.length > 240) {
      return false;
    }

    return true;
  }
}
