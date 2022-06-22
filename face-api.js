//facingMode: string = 'environment'; Set rear camera 
facingMode: string = 'user';  //Set front camera
allowCameraSwitch = false;

/**
 * ngx-webcam open front camera by default in mobile
 * 
 * public get videoOptions(): MediaTrackConstraints {
    const result: MediaTrackConstraints = {};
    if (this.facingMode && this.facingMode !== '') {
        result.facingMode = { ideal: this.facingMode };
    }
    return result;
}
 * 
 * 
 */



/**
 * <webcam (imageCapture)="imageCaptured($event)" [trigger]="capture$" (initError)="handleInitError($event)" [videoOptions]="videoOptions" [allowCameraSwitch]="allowCameraSwitch">

 */