export default interface CreateToken {
    create(): Promise<string>
}