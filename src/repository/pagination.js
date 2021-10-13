
import { ref } from 'vue'

// 管理分页参数的数据repository
export default function paginationRepository(currentPage_ = 1, pageSize_ = 10, total_ = 0) {
  const currentPage = ref(currentPage_)
  const pageSize = ref(pageSize_)
  const total = ref(total_)

  const setCurrentPage = (newIndex) => {
    currentPage.value = newIndex
  }
  const setPageSize = (newSize) => {
    pageSize.value = newSize
  }
  const setTotal = (newTotal) => {
    total.value = newTotal
  }
  const resetPage = (newTotal) => {
    currentPage.value = 1
    pageSize.value = 10
    total.value = 0
  }

  return {
    currentPage,
    pageSize,
    total,
    setCurrentPage,
    setPageSize,
    setTotal,
    resetPage
  }
}
