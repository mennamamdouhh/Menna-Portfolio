import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import SectionSymbol from "./icons/SectionSymbol";
import "../styles/certificates.css";

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      number: "01",
      title: "OPEN SOURCE WEB DEVELOPMENT",
      organization: "ITI",
      year: "2025",
      id: "1hWAOrAukWFWstcPB4oXnxEs5LsgpnRwG",
    },
    {
      number: "02",
      title: "ECPC PARTICIPATION",
      organization: "ECPC",
      year: "2025",
      id: "13-YZBNH7ASb9EobQZCFQHYHc9o2RKND6",
    },
  ];

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-blue-light"></div>

      <div className="container">
        <div className="certificates-heading">
          <div className="section-label">
            <SectionSymbol />
            <span>04 / CERTIFICATES</span>
          </div>

          <div className="certificates-title-row">
            <h2>
              LEARNING
              <br />
              PROOF
            </h2>

            <span className="certificate-count">02</span>
          </div>
        </div>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <button
              className="certificate-card"
              key={certificate.number}
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="certificate-top">
                <span>{certificate.number}</span>
                <ArrowUpRight size={24} />
              </div>

              <div className="certificate-middle">
                <span>{certificate.organization}</span>

                <h3>{certificate.title}</h3>
              </div>

              <div className="certificate-bottom">
                <span>CERTIFICATE</span>
                <span>{certificate.year}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="certificate-modal-box"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="modal-header">
              <div>
                <span>{selectedCertificate.organization}</span>
                <h3>{selectedCertificate.title}</h3>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                aria-label="Close certificate"
              >
                <X size={23} />
              </button>
            </div>

            <iframe
              src={`https://drive.google.com/file/d/${selectedCertificate.id}/preview`}
              title={selectedCertificate.title}
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
}