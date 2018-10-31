module.exports = (expect) => {
    describe("It tests this", () => {

        it("1 + 1 = 2", () => {
            let result = 1 + 1
            expect(2).to.eql(result)
        })
    })
}