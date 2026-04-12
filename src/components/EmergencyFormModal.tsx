import { useEffect } from 'react';
import { X } from 'lucide-react';

const GHL_FORM_SRC = 'https://crm.plutotravels.ae/widget/form/sTQOBlsJnPE1Otx0gHTk';
const FORM_EMBED_SCRIPT = 'https://crm.plutotravels.ae/js/form_embed.js';

interface EmergencyFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  formTitle?: string;
}

export default function EmergencyFormModal({
  isOpen,
  onClose,
  formTitle = 'Emergency Travel Assistance',
}: EmergencyFormModalProps) {
  useEffect(() => {
    if (!isOpen || typeof document === 'undefined') return;
    const existing = document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`);
    if (existing) return;
    const script = document.createElement('script');
    script.src = FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl w-full max-w-[calc(100%-1.5rem)] sm:max-w-md md:max-w-2xl max-h-[90vh] overflow-hidden flex flex-col my-auto">
        {/* Header — same pattern as MembershipFormModal */}
        <div className="sticky top-0 shrink-0 bg-gradient-to-r from-primary-teal to-primary-navy text-white p-6 flex items-center justify-between rounded-t-2xl sm:rounded-t-3xl">
          <h2 className="text-xl sm:text-2xl font-bold">{formTitle}</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors touch-manipulation"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body — GHL iframe (POPUP layout, scrollable) */}
        <div className="flex-1 min-h-0 overflow-y-auto p-4 sm:p-6">
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
            className="w-full border-0 rounded-[3px] block"
            style={{ minHeight: '717px' }}
          />
        </div>
      </div>
    </div>
  );
}
