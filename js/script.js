document.getElementById('injuryForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const injuryType = document.querySelector('input[name="injuryType"]:checked').value;
    const name = document.getElementById('name').value;
    const fatherName = document.getElementById('fatherName').value;
    const age = document.getElementById('age').value;
    const village = document.getElementById('village').value;
    const examinationTime = document.getElementById('examinationTime').value;
    const examinationDate = document.getElementById('examinationDate').value;
    const injuryDetails = document.getElementById('injuryDetails').value;
    const ageOfInjury = document.getElementById('ageOfInjury').value;
    const opinion = document.getElementById('opinion').value;
    const moi = document.getElementById('moi').value;
    const enclosure = document.getElementById('enclosure').value;
    const regNo = document.getElementById('regNo').value;
    const footerDate = document.getElementById('footerDate').value;

    const letterContent = `
        <h1>Final Injury Report</h1>
        <h2>C/O-Physical assault</h2>
        <p>To,</p>
        <p>The S.I. Police Chand, Kaimur</p>
        <p>This is to certify that ${name} S/o ${fatherName} age ${age} Yrs/Male,</p>
        <p>R/O-Village- ${village}, P.S-chand.dist- Kaimur has been examined by</p>
        <p>me at ${examinationTime} on ${examinationDate} and further injury report was</p>
        <p>demanded by S.I. p.s Chand on 10/07/2024 injury details are as</p>
        <p>follows-</p>
        <p>1. ${injuryDetails}</p>
        <p><b>Age of injury-</b> ${ageOfInjury}</p>
        <p><b>Opinion-</b> ${opinion}</p>
        <p><b>M.O.I.-</b> ${moi}</p>
        <p><b>Enclosure-</b> ${enclosure}</p>
        <div class="footer">
            <p>EMG-</p>
            <p>Reg.No- ${regNo}</p>
            <p>Date- ${footerDate}</p>
        </div>
        <div class="complimentary-close">
            <p>Dr. MD.ILTAF ANSARI</p>
            <p>MO, CHC CHAND</p>
            <p>МО-9308334866</p>
        </div>
    `;

    const newWindow = window.open('', '', 'width=800,height=600');
    newWindow.document.write('<html><head><title>Injury Report</title><style>body { font-family: Arial, sans-serif; } h1, h2 { text-align: center; } .complimentary-close { text-align: right; } </style></head><body contenteditable="true">');
    newWindow.document.write(letterContent);
    newWindow.document.write('</body></html>');
    newWindow.document.close();
});