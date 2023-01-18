function hospital(input){
    let period = Number(input[0]);
    let patients = 0;
    let doctors = 7;
    let servedPatients = 0;
    let unservedPatients = 0;

    for (let i = 1; i <= period; i++){
    patients = Number(input[i]);
    if (i % 3 === 0 && unservedPatients > servedPatients){
        doctors++
    }
        if (doctors >= patients){
    servedPatients += patients
    }   else {
        servedPatients += doctors
        unservedPatients += patients - doctors
    }
    }
    console.log(`Treated patients: ${servedPatients}.`)
    console.log(`Untreated patients: ${unservedPatients}.`)

}
hospital(["4","7","27","9","1"])
