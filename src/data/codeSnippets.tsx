const randomCodeSnippet = () => {
  const codeSnippets = [
    /* <div key="ts2339-code" className="token red">
      error TS2339: Property &apos;x&apos; does not exist on type &apos;y&apos;.
    </div>,
    <div key="shrug-string-code" className="token gre">
      ¯\_(ツ)_/¯
    </div>, */
    <div key="neofetch-code">
      <span className="token whi">PS C:\&gt; </span>
      <span className="token yel">Get-ADUser </span>
      <span className="token gra">-Identity </span>
      <span className="token whi">toni.ruhanen</span>
      <br />
      <br />
      <br />
      <span className="token whi">
        DistinguishedName : CN=Toni Ruhanen,OU=Users,DC=local
      </span>
      <br />
      <span className="token whi">
        Enabled &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        True
      </span>
      <br />
      <span className="token whi">
        LookingForJob &nbsp;&nbsp;&nbsp;&nbsp;: True
      </span>
      <br />
      <span className="token whi">
        Name
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        Toni Ruhanen
      </span>
      <br />
      <span className="token whi">
        ObjectClass &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: user
      </span>
      <br />
      <span className="token whi">
        ObjectGUID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        3346ec65-0787-4c5e-b5ad-9c031ca50152
      </span>
      <br />
      <span className="token whi">
        Email
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        toni@ruhis.fi
      </span>
    </div>,
  ];
  return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
};

export default randomCodeSnippet;
