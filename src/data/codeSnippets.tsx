import dayjs from "dayjs";

const codeSnippets = ({ idx = undefined }: { idx: number | undefined }) => {
  const codeSnippets = [
    <div key="neofetch-code">
      <span className="token whi">PS C:\&gt; </span>
      <span className="token yel">Get-ADUser </span>
      <span className="token gra">-Filter </span>
      <span className="token blu">'Name -like "Toni Ruhanen"'</span>
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
        City
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        Helsinki
      </span>
      <br />
      <span className="token whi">
        Country &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        Finland
      </span>
      <br />
      <span className="token whi">
        Title
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        Fullstack Developer
      </span>
      <br />
      <span className="token whi">
        ObjectGUID &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
        3346ec65-0787-4c5e-b5ad-9c031ca50152
      </span>
      <br />
      <span className="token whi">
        Email
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;
        <a className="token whi" href="mailto:toni@ruhis.fi">
          toni@ruhis.fi
        </a>
      </span>
    </div>,
    <div key="ts2339-code" className="token red">
      error TS2339: Property &apos;x&apos; does not exist on type &apos;y&apos;.
    </div>,
    <div key="shrug-string-code" className="token gre">
      ¯\_(ツ)_/¯
    </div>,
    <div key="hello-world-node-code" className="token whi">
      &gt; console.log("Hello World!") <br />
      Hello World!
      <br />
      <span className="token gra">undefined</span>
    </div>,
    <div key="alert-1-code" className="token blu">
      &gt;{" "}
      <a className="token whi pointer" onClick={() => alert(1)}>
        alert(1)
      </a>
    </div>,
    <div key="what-day-code" className="token whi">
      <span className="token mag">func</span>{" "}
      <span className="token blu">whatDayIsToday</span>
      <span className="token gol">()</span>{" "}
      <span className="token mag">-&gt;</span>{" "}
      <span className="token yel">String</span> {"{"}
      <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span className="token mag">return</span>{" "}
      <span className="token gre">{`"${dayjs().format("dddd")}"`}</span>;<br />
      {"}"}
    </div>,
    <div className="token whi">
      :QUIT
      <br />
      <span className="token red">E492: Not an editor command: QUIT</span>
      <br />
      :QUIT!
      <br />
      <span className="token red">E492: Not an editor command: QUIT!</span>
      <br />
      :HELP
      <br />
      <span className="token red">E492: Not an editor command: HELP</span>
      <br />
      :quit
      <br />
      <span className="token red">
        E37: No write since last change (add ! to override)
      </span>
    </div>,
  ];

  if (idx !== undefined) {
    return codeSnippets[idx];
  } else {
    return codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
  }
};

export default codeSnippets;
