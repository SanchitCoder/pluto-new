import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const GHL_FORM_SRC = 'https://crm.plutotravels.ae/widget/form/sTQOBlsJnPE1Otx0gHTk';
const FORM_EMBED_SCRIPT = 'https://crm.plutotravels.ae/js/form_embed.js';

export default function CrisisFormPage() {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    const existing = document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`);
    if (existing) return;
    const script = document.createElement('script');
    script.src = FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen bg-luxury-canvas flex flex-col">
      {/* Back link to crisis landing */}
      <div className="shrink-0 border-b border-gray-200 bg-luxury-pearl px-4 py-3">
        <Link
          to="/crisis"
          className="inline-flex items-center gap-2 text-primary-navy font-semibold hover:text-primary-teal transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Emergency Travel
        </Link>
      </div>

      {/* Form — full page */}
      <div className="flex-1 min-h-0 p-4 sm:p-6">
        <iframe
          src={GHL_FORM_SRC}
          title="Emergency"
          id="popup-sTQOBlsJnPE1Otx0gHTk"
          data-layout="{'id':'POPUP'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Emergency"
          data-height="717"
          data-layout-iframe-id="popup-sTQOBlsJnPE1Otx0gHTk"
          data-form-id="sTQOBlsJnPE1Otx0gHTk"
          className="w-full h-full min-h-[calc(100vh-80px)] border-0 rounded-[3px] block"
          style={{ minHeight: '717px' }}
        />
      </div>
    </div>
  );
}
