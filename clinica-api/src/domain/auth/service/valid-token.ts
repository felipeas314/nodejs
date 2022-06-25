export default interface ValidToken {
    valid(token: String): Promise<Boolean>
}