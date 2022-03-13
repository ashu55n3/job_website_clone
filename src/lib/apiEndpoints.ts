const apiEndpoints = {
    login: 'auth/login',
    applicantData: (applicantId: string) => `recruiters/jobs/${applicantId}/candidates`,
    postedJobList: (page: string) => `recruiters/jobs?page=${page}`,
};

export default apiEndpoints;
