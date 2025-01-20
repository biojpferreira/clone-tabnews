test("GET to /api/v1/status should return 200", async () => {
  // o metedo await só pode ser utilizar se a função for do tipo assincrona
  const response = await fetch("http://localhost:3003/api/v1/status");
  expect(response.status).toBe(200);
});
