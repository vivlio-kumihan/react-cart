import "../styles/containers/PrivacyPolicy.sass";

const PrivacyPolicy = ({
  privacyPolicyToggle, handleBack
}) => {
  return (
    <div className={`modal-privacy-policy ${privacyPolicyToggle ? 'active' : ''}`}>
      <div className="container">
        <button className="modal-privacy-policy-close-btn" onClick={handleBack}>
          <span></span>
          <span></span>
        </button>
        <h4 className="modal-pp-header">プライバシーポリシー</h4>
        <p className="lead-copy">白峯神宮は、個人情報保護の重要性を認識し、適切な利用と保護を図り、全ての従業員に周知徹底をするとともに次の事を遵守していきます。</p>
        <h5 className="leading-square-header">個人情報の取り扱い</h5>
        <p>皆様の個人情報の取り扱いに関して、目的に応じた個人情報保護のため、適切かつ厳重に取り扱います。</p>
        <h5 className="leading-square-header">個人情報の利用</h5>
        <p>皆様の個人情報は、利用目的の達成に必要な範囲において取扱う措置を講じ、その範囲を超えての目的外利用はいたしません。利用目的の範囲を超えて、個人情報を利用する必要が生じた場合は、その旨をあらかじめご連絡し、同意をいただいた上で利用いたします。</p>
        <h5 className="leading-square-header">個人情報の提供</h5>
        <p>あらかじめ、皆様からの同意をいただいている場合、及び法令等に基づく場合を除き、個人情報を第三者に対して提供いたしません。ただし、利用目的を遂行するために委託する場合があります。この場合、委託先に対する個人情報保護の契約を締結し、適正な取扱いが行われるよう管理・監督いたします。</p>
        <h5 className="leading-square-header">安全管理措置</h5>
        <p>お預かりした個人情報は、必要な安全管理措置を講じ、漏えい、滅失又はき損等を防止するとともに是正に努めてまいります。</p>
        <h5 className="leading-square-header">法令等の遵守</h5>
        <p>個人情報の保護に適用される法令及びその他の規範を遵守します。</p>
        <h5 className="leading-square-header">継続的改善</h5>
        <p>事業内容の変化および事業を取り巻く社会環境・法令・情報技術の変化等に対応して、個人情報取扱体制の見直しを行い、継続的な改善に努めてまいります。</p>
        <h5 className="leading-square-header">ご相談及び開示等への対応に関すること</h5>
        <p>保有しております個人情報について、ご相談、及び利用目的の通知、開示、訂正等、利用停止等を希望される場合、お問い合わせください。ご本人確認の上、誠意をもって対応させていただきます。</p>
      </div>
    </div>
  );
};


export default PrivacyPolicy;