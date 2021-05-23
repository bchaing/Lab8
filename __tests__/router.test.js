/**
 * @jest-environment jsdom
 */

import { pushToHistory } from "../scripts/router";

describe("push to history", () => {
  test("settings history", () => {
    const history = pushToHistory("settings", 0);
    expect(history.length).toBe(2);
    expect(history.state).toEqual({ page: "settings" });
  });

  test("entry history", () => {
    const history = pushToHistory("entry", 10);
    expect(history.length).toBe(3);
    expect(history.state).toEqual({ page: "entry10" });
  });

  test("default history", () => {
    const history = pushToHistory("", 0);
    expect(history.length).toBe(4);
    expect(history.state).toEqual({});
  });
});
