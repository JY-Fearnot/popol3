import "./usedinfo.css";
import { useState } from "react";
import 결과없음 from "./../image/결과없음.png";
import 체크 from "./../image/체크.png";

function UsedInfo() {
  let [usedata, setUsedata] = useState([
    {
      id: 1,
      status: "이용",
      title: "숙소이름1",
      date: "완료일자1",
    },
    {
      id: 2,
      status: "취소",
      title: "숙소이름2",
      date: "완료일자2",
    },
    {
      id: 3,
      status: "취소",
      title: "숙소이름3",
      date: "완료일자3",
    },
    {
      id: 4,
      status: "이용",
      title: "숙소이름4",
      date: "완료일자4",
    },
  ]);

  const itemsPerPage = 5; // 한 페이지당 표시할 공지사항 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = usedata.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(usedata.length / itemsPerPage);
  const maxVisiblePages = 5; // 보이는 페이지 숫자의 최대 개수
  let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  if (endPage - startPage < maxVisiblePages - 1) {
    startPage = Math.max(endPage - maxVisiblePages + 1, 1);
  }

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div id="jsw_maincontainer">
      <div id="jsw_subcontainer">
        <div className="usepageTitle">
          <img src={체크} style={{height: "65%"}}></img>
          <span>
            이용 내역<span>({usedata.length})</span>
          </span>
        </div>
        {usedata == "" ? (
          <div className="reservationComentBox">
            <img src={결과없음}></img>
            <div className="reservationComent">이용 내역이 없습니다.</div>
            <div className="reservationSubComent">
              최저가로 예약
              <br />
              숙소들을 지금 만나세요!
            </div>
            <div className="reservationMoreBtnBox">
              <div>다양한 숙소 보러가기</div>
            </div>
          </div>
        ) : (
          <div>
            <div className="usedListBox">
              {currentItems.map((a, i) => {
                return (
                  <div className="usedList" key={a.id}>
                    <div className="usedid">{a.id}</div>
                    <div className="usedtitle">{a.title}</div>
                    <div className="useddate">{a.date}</div>
                    <div className="usedstatus">{a.status} 완료</div>
                  </div>
                );
              })}
            </div>
            <Pagination
              itemsPerPage={itemsPerPage}
              totalItems={usedata.length}
              currentPage={currentPage}
              onPageChange={handlePageChange}
              totalPages={totalPages}
              pageNumbers={pageNumbers}
            />{" "}
            {/* 다음 페이지로 이동시켜주는 컴포넌트 영역 */}
          </div>
        )}
      </div>
    </div>
  );
}

function Pagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
  totalPages,
  pageNumbers,
}) {
  return (
    <div className="pagination">
      {" "}
      {/* 현재 페이지의 위치를 알려주는 컴포넌트 */}
      {currentPage > 1 && (
        <span onClick={() => onPageChange(currentPage - 1)}>&laquo;</span>
      )}
      {pageNumbers.map((number) => (
        <span
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </span>
      ))}
      {currentPage < totalPages && (
        <span onClick={() => onPageChange(currentPage + 1)}>&raquo;</span>
      )}
    </div>
  );
}

export default UsedInfo;