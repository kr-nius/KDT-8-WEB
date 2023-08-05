// 데이터 베이스 선택하는 부분
exports.commentInfos = () => {
  // sql문 실행됐다고 가정하고 반환
  return [
    {
      id: 1,
      userId: "hello",
      date: "2023-08-01",
      comment: "안녕",
    },
    {
      id: 2,
      userId: "hi",
      date: "2023-08-02",
      comment: "안눙",
    },
    {
      id: 3,
      userId: "bang",
      date: "2023-08-03",
      comment: "ㅎㅇ",
    },
    {
      id: 4,
      userId: "hot",
      date: "2023-08-04",
      comment: "더워",
    },
  ];
};
