let qrContentInput = document.getElementById("qr-content");
        let qrForm = document.getElementById("qr-form");
        let qrCode;

        function generateQrCode(qrContent){
            return new QRCode("qr-code", {
                text : qrContent,
                width : 256,
                height : 256,
                colorDark : "#000000",
                colorLight : "#ffffff",
                correctLevel : QRCode.CorrectLevel.H,
            });
        }

        qrForm.addEventListener('submit', function(event){
            event.preventDefault();
            let qrContent = qrContentInput.value;
            if(qrCode == null){
                qrCode = generateQrCode(qrContent);
            }
            else{
                qrCode.clear();  // Clear the previous QR Code
                qrCode.makeCode(qrContent);
            }
        });
