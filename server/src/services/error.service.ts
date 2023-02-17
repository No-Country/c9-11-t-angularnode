class ErrorService extends Error {

    private error: any;
    
    constructor(error:any) {
        super(error.message);
        this.error = error;
    }

    public handleRequestError() {
        if (this.error.statusCode) {
            return this.error;
        }
        return { statusCode: 500, message: this.error.message };
    }
   
  

}

export default ErrorService;