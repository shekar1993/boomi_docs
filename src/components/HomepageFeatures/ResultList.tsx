import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import List from "@mui/material/List";
import { ListItem, Box, Typography } from "@mui/material";
import { removeUnderscore } from "../../MyCustomScript";
import {
  buildResultList,
  Result,
  buildResultTemplatesManager,
  ResultTemplatesManager,
  ResultList as HeadlessResultList,
  buildInteractiveResult,
  SearchEngine,
} from "@coveo/headless";
import EngineContext from "../common/engineContext";

type Template = (result: Result) => React.ReactNode;

export function filterProtocol(uri: string) {
  // Filters out dangerous URIs that can create XSS attacks such as `javascript:`.
  const isAbsolute = /^(https?|ftp|file|mailto|tel):/i.test(uri);
  const isRelative = /^(\/|\.\/|\.\.\/)/.test(uri);

  return isAbsolute || isRelative ? uri : "";
}

interface FieldValueInterface {
  value: string;
  caption: string;
}

interface ResultListProps {
  controller: HeadlessResultList;
}
function ListItemLink(engine: SearchEngine, result: Result) {
  const interactiveResult = buildInteractiveResult(engine, {
    options: { result },
  });

  const getClickUri = (result) => {
    if (result?.raw?.objecttype === "Documentation") {
      return `${window.location.origin}${
        result.clickUri.split(".boomi.com")[1]
      }`;
    }
    if (result?.raw?.objecttype === "Developer Documentation") {
      return result?.clickUri;
    }
    if (result.raw.objecttype === "Knowledge_Article") {
      const salesforceArticleId =
        result.clickUri.split("/")[result.clickUri.split("/").length - 1];
      const communityUrl = `https://community.boomi.com/s/article/${salesforceArticleId}`;
      return communityUrl;
    }
    return result.clickUri;
  };
  
  return (
    <a
      href={filterProtocol(getClickUri(result))}
      onClick={() => interactiveResult.select()}
      onContextMenu={() => interactiveResult.select()}
      onMouseDown={() => interactiveResult.select()}
      onMouseUp={() => interactiveResult.select()}
      onTouchStart={() => interactiveResult.beginDelayedSelect()}
      onTouchEnd={() => interactiveResult.cancelPendingSelect()}
      target="_blank"
      rel="noreferrer"
    >
      {result.title}
    </a>
  );
}

function FieldValue(props: FieldValueInterface) {
  return (
    <div className="no-result_facets" data-testid="no-result_facets">
      <span>
        {props.caption}:&nbsp;
        {removeUnderscore(props.value)}
      </span>
    </div>
  );
}

const ResultListRenderer: FunctionComponent<ResultListProps> = (props) => {
  const { controller } = props;
  const engine = useContext(EngineContext)!;
  const [state, setState] = useState(controller.state);

  const headlessResultTemplateManager: ResultTemplatesManager<Template> =
    buildResultTemplatesManager(engine);

  headlessResultTemplateManager.registerTemplates({
    conditions: [],
    content: (result: Result) => (
      <ListItem disableGutters key={result.uniqueId}>
        <div className="no-result_list ex-mt-medium">
          <Box pb={1} className="no-result_link">
            {ListItemLink(engine, result)}
          </Box>

          {result.excerpt && (
            <Box pb={1}>
              <span className="no-result_description">{result.excerpt}</span>
            </Box>
          )}

          <div className="results-category-wrapper">
            {result.raw.objecttype && (
              <FieldValue caption="Type" value={result.raw.objecttype} />
            )}
            <span className="results-category-seperator">{`|`}</span>
            {(result.raw.objecttype === "Documentation" ||
              result.raw.objecttype === "Developer Documentation") && (
              <FieldValue
                caption="Topic"
                value={
                  result?.raw?.matter ? (result?.raw?.matter as string) : "None"
                }
              />
            )}
            {result.raw.objecttype === "Knowledge_Article" && (
              <FieldValue
                caption="Topic"
                value={
                  result?.raw?.sfdatacategoryservices
                    ? ((result?.raw?.sfdatacategoryservices as string[]).join(
                        ", "
                      ) as string)
                    : "None"
                }
              />
            )}
          </div>
        </div>
      </ListItem>
    ),
  });

  useEffect(
    () => controller.subscribe(() => setState(controller.state)),
    [controller]
  );

  return (
    <List>
      {state.results.map((result: Result) => {
        const template = headlessResultTemplateManager.selectTemplate(result);
        return template ? template(result) : null;
      })}
    </List>
  );
};

const ResultList = () => {
  const engine = useContext(EngineContext)!;
  const controller = buildResultList(engine);
  return <ResultListRenderer controller={controller} />;
};

export default ResultList;
