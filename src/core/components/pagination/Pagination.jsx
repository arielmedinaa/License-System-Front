import React from 'react'

const Pagination = ({ 
    totalPages, 
    currentPage, 
    changePage, 
    licensesPerPage, 
    filteredLicenses }) => {
    return (
        <>
            {totalPages > 1 && (
                <div className="px-4 py-3 flex items-center justify-between border-t border-gray-700 sm:px-6">
                    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                        <div>
                            <p className="text-sm text-gray-400">
                                Mostrando <span className="font-medium">{(currentPage - 1) * licensesPerPage + 1}</span> a <span className="font-medium">{Math.min(currentPage * licensesPerPage, filteredLicenses.length)}</span> de <span className="font-medium">{filteredLicenses.length}</span> resultados
                            </p>
                        </div>
                        <div>
                            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                                <button
                                    onClick={() => changePage(Math.max(1, currentPage - 1))}
                                    disabled={currentPage === 1}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-700 bg-gray-800 text-sm font-medium ${currentPage === 1 ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="sr-only">Anterior</span>
                                    &laquo;
                                </button>

                                {[...Array(totalPages)].map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => changePage(i + 1)}
                                        className={`relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium ${currentPage === i + 1
                                            ? 'z-10 bg-indigo-600 border-indigo-500 text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                            }`}
                                    >
                                        {i + 1}
                                    </button>
                                ))}

                                <button
                                    onClick={() => changePage(Math.min(totalPages, currentPage + 1))}
                                    disabled={currentPage === totalPages}
                                    className={`relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-700 bg-gray-800 text-sm font-medium ${currentPage === totalPages ? 'text-gray-500 cursor-not-allowed' : 'text-gray-300 hover:bg-gray-700'
                                        }`}
                                >
                                    <span className="sr-only">Siguiente</span>
                                    &raquo;
                                </button>
                            </nav>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default Pagination